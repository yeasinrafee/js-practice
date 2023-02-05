function paperRequirements(book1, book2, book3){
    const book1Pages = 100 * book1;
    const book2Pages = 200 * book2;
    const book3Pages = 300 * book3;

    return book1Pages + book2Pages + book3Pages;
}

const totalPages = paperRequirements(3, 2, 1);
console.log(totalPages);