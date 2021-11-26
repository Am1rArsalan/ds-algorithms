import { useState, useCallback, useEffect } from "react";

function usePageData({ url, fireOnLoad, successCallback, failedCallback }) {
  const [data, setPageData] = useState(null);
  const [pending, setPending] = useState(false);
  const [hasError, setHasError] = useState(false);

  const request = useCallback(() => {
    setPending(true);
    setHasError(false);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPageData(data);
        setPending(false);
        if (successCallback) {
          successCallback(data);
        }
      })
      .catch(() => {
        setHasError(true);
        setPending(false);
        if (failedCallback) {
          failedCallback();
        }
      });
  }, [url, successCallback, failedCallback]);

  useEffect(() => {
    if (fireOnLoad) {
      request();
    }
  }, [fireOnLoad, request]);

  return {
    data,
    pending,
    hasError,
    request,
  };
}

export default usePageData;
