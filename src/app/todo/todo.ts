export interface TodoSearchResult {
  id?: number;
  title: string;
  dueDate: string;
  important: boolean;
  completed: boolean;
}

export interface Todo {
  id?: number;
  title: string;
  dueDate?: string;
  important: boolean;
  completed: boolean;
}
