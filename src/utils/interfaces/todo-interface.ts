export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export interface ITask {
  id: ItemId;
  timestamp: number;
  text: string;
}
