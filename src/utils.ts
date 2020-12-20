export const logError = (error: Error, message?: string): void => {
    console.error(`\n\x1b[1m\x1b[31m<==  ${message || "Error Thrown"}  ==>\x1b[0m\n`);
    console.error(error, "\n");
};
