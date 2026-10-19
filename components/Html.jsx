// Renders a block of HTML exported from Claude Design.
export default function Html({ html, as: Tag = "div" }) {
  return <Tag dangerouslySetInnerHTML={{ __html: html }} />;
}
