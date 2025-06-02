export interface Link {
  title: string;
  description: string;
  url: string;
}

export interface Item {
  title: string;
  toolTipTitle: string;
  description: string;
  links: Link[];
}
