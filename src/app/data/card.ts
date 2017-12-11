export class Card {

  Title: string;
  SubTitle: string;
  Text: string;
  Links: Array<any>;
  Tags: Array<any>;

  constructor(title, subTitle, text, tags) {
    this.Title = title;
    this.SubTitle = subTitle;
    this.Text = text;
    this.Tags = tags;
  }
}
