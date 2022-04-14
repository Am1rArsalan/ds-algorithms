export function compareTwoString(S: string, T: string) {
    const removeRegex = new RegExp(/.#/g);
    return S.replaceAll(removeRegex, '') === T.replaceAll(removeRegex, '');
}
