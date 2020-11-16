export interface TodoSearchResult {
  id?: number;
  title: string;
  dueDate: string;
}

export interface Todo {
  id?: number;
  title: string;
  dueDate?: string;
  important: boolean;
  completed: boolean;
}
