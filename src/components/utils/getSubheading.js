export function getSubheading(numberOfTasks) {
	switch (true) {
		case numberOfTasks > 4:
			return `${numberOfTasks} zadań`;
		case numberOfTasks > 1:
			return `${numberOfTasks} zadania`;
		case numberOfTasks === 1:
			return '1 zadanie';
		case numberOfTasks === 0:
		default:
			return 'Brak zadań';
	}
}

// Folder utils. przechowujemy funkcje napisane w czystym JS to często utils lub helpers. Czasem tworzy sie dla kazdej z funkcji osobny plik pomocniczy w czystym JS,
// https://kurs.zrozumiecreact.pl/products/zrozumiec-react/categories/2153892810/posts/2171757079  -- 32:56

// Plan działania:
// 1. Dodanie statycznego kodu (sztywny JS i gotowe style)
// 2. Stworzenie stanu
// 3. Obsługa eventów
// 4. Aktualizowanie stanu 

