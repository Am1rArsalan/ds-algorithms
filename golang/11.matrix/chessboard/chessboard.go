package chessboard

var knightMoves = [][]int{
	{-2, 1},
	{-2, -1},
	{-1, -2},
	{1, -2},
	{2, 1},
	{2, -1},
	{-1, 2},
	{1, 2},
}

func kp(n, r, c, k int) float64 {
	if r >= n || r < 0 || c >= n || c < 0 {
		return 0
	} else if k == 0 {
		return 1
	}

	p := float64(0)

	for _, m := range knightMoves {
		p += kp(n, m[0]+r, m[1]+c, k-1) / 8
	}

	return p
}

func chessboard(n, r, c, k int) float64 {
	return kp(n, r, c, k)
}

//

func memoizedKp(n, r, c, k int, memoizedData *[][][]float64) float64 {
	if r >= n || r < 0 || c >= n || c < 0 {
		return 0
	} else if k == 0 {
		return 1
	} else if (*memoizedData)[k][r][c] != -1 {
		return (*memoizedData)[k][r][c]
	}

	p := float64(0)

	for _, m := range knightMoves {
		p += memoizedKp(n, m[0]+r, m[1]+c, k-1, memoizedData) / 8
	}

	(*memoizedData)[k][r][c] = p

	return (*memoizedData)[k][r][c]
}

func memoizedChessboard(n, r, c, k int) float64 {
	memoizedData := [][][]float64{}

	for i := 0; i < k; i++ {
		memoizedData = append(memoizedData, [][]float64{})
		for j := 0; j < n; j++ {
			memoizedData[i] = append(memoizedData[i], []float64{})
			for s := 0; s < n; s++ {
				memoizedData[i][j] = append(memoizedData[i][j], -1)
			}
		}
	}

	return memoizedKp(n, r, c, k, &memoizedData)
}
