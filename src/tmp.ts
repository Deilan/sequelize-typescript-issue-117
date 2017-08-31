import * as tmp from "tmp";

export function tmpFileAsync() {
    return new Promise<{ path: string, cleanupCallback: () => void }>((resolve, reject) => {
        tmp.file((err: any, path: string, fd: number, cleanupCallback: () => void) => {
            if (err) {
                reject(err);
            }
            resolve({ path, cleanupCallback });
        });
    });
}