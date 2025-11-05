/**
 * Removes accents/diacritics from a string.
 * @param input - The string to process.
 * @returns The string without accents.
 */
function removeAccents(input: string): string {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Escapes special characters in a string to create a safe regular expression pattern.
 * @param input - The input string to escape.
 * @returns The escaped string.
 */
function getSafeRegexpString(input: string): string {
  return input.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Formats a string by removing spaces, non-alphanumeric characters, and optionally adding a delimiter.
 * @param input - The string to format.
 * @param delimiter - The delimiter to use for replacement.
 * @param ignoreInvalid - Whether to ignore invalid characters instead of replacing them.
 * @returns The formatted string.
 */
function format(
  input: string,
  delimiter: string,
  ignoreInvalid = false,
): string {
  const harmonized = removeAccents(input).trim().toLowerCase();
  const safeDelimiter = getSafeRegexpString(delimiter);

  const result = harmonized
    .replace(
      ignoreInvalid ? /\s+/g : new RegExp(`[^a-z0-9${safeDelimiter}]+`, 'g'),
      delimiter,
    )
    .replace(new RegExp(`${safeDelimiter}{2,}`, 'g'), delimiter) // Remove multiple delimiter repetitions
    .replace(new RegExp(`^${safeDelimiter}|${safeDelimiter}$`, 'g'), ''); // Trim leading/trailing delimiters

  return result;
}

interface SlugifyOptions {
  delimiter?: string;
  prefix?: string;
}

/**
 * Converts a string into a slugified version with optional prefix and delimiter.
 * @param node - The string to slugify.
 * @param options - Configuration options for slugification.
 * @returns The slugified string.
 */
export default function slugify(
  node: string,
  options: SlugifyOptions = { delimiter: '-', prefix: '' },
): string {
  const { delimiter = '-', prefix = '' } = options;

  const slugifiedPrefix = format(prefix, delimiter, true);
  const slugifiedContent = format(node, delimiter);

  return slugifiedPrefix
    ? `${slugifiedPrefix}${delimiter}${slugifiedContent}`
    : slugifiedContent;
}
