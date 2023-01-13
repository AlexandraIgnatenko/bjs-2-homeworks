//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = type;
	}

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";    
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";    
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";    
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";    
    }
}

// Задача 2

class Library {
    constructor(libraryName) {
        this.name = libraryName;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(name) {
        const bookToGive = this.findBookBy('name', name);
        if(bookToGive) {
            const indexBookToGive = this.books.indexOf(bookToGive);
            this.books.splice(indexBookToGive, 1);
            return bookToGive
        }
        return null;
    }
}
