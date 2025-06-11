const shortContentLength = 400;

export type Post = {
  path: string;
  title: string;
  date: Date;
  content?: string;
  shortContent?: string;
  containsMedia?: boolean;
};

// Import all markdown files as raw text at build time
const markdownFiles = import.meta.glob("/src/lib/models/blog/posts/*.md", {
  as: "raw",
  eager: true,
});

export const posts: Post[] = Object.entries(markdownFiles)
  .map(([path, content]) => {
    content = content as string;
    const containsImage = content.includes("![") || content.includes("<img");
    const containsTable =
      (content.match(/^\|.*\|\n\|\s*[:-]+[\s\S]*\|.*\|$/gm)?.length || 0) > 0;

    const containsMedia = containsImage || containsTable;

    const [title, body] = extractTitle(content);
    return {
      path,
      title: title.trim(),
      date: extractDateFromFilename(path),
      content: body.trim(),
      shortContent: getShortContent(body, containsMedia),
      containsMedia,
    };
  })
  .sort((a, b) => b.date.getTime() - a.date.getTime());

function extractTitle(content: string): [string, string] {
  const match = content.match(/^#\s*(.*)/);
  const title = match ? match[1] : "Untitled";
  const body = match ? content.slice(match[0].length).trim() : content.trim();
  return [title, body];
}

function extractDateFromFilename(filePath: string): Date {
  const match = filePath.match(/(\d{4}-\d{2}-\d{2})/);
  if (!match) throw new Error(`Invalid filename: ${filePath}`);
  return new Date(match[1]);
}

function getShortContent(content: string, containsMedia: boolean): string {
  let shortContent = content.slice(0, shortContentLength);
  for (let i = shortContentLength; i < content.length; i++) {
    if ([",", ".", "!", "?"].includes(content[i])) {
      shortContent = content.slice(0, i);
      break;
    }
  }

  if (shortContent.length < content.length || containsMedia) {
    shortContent += "\n..."; // Disappeared after table without \m
    // TODO: fix links and tables cut in half
  }

  return shortContent;
}
