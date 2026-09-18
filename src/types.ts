// A "type" is a label for the shape of data.
// Every project card on the site must match this shape.
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
};
