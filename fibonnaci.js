function fibonnaci(n) {
    return n < 2 ? n : fibonnaci(n - 1) + fibonnaci(n - 2);
}