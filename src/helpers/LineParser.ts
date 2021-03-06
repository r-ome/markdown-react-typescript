class LineParser {
  public Parse(value: string, tag: string): [boolean, string] {
    let output: [boolean, string] = [false, ''];
    output[1] = value;

    if (value === '') {
      return output;
    }

    let split = value.startsWith(`${tag}`);
    if (split) {
      output[0] = true;
      output[1] = value.substring(tag.length);
    }

    return output;
  }
}

export default LineParser;