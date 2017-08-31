import * as tmp from "tmp";

const result = {
    file: () => {
        return new Promise<{ path: string, fileDescriptor: number, cleanupCallback: () => void }>((resolve, reject) => {
            tmp.file((err: any, path: string, fileDescriptor: number, cleanupCallback: () => void) => {
                if (err) {
                    reject(err);
                }
                resolve({ path, fileDescriptor, cleanupCallback });
            });
        });
    },
};

export default result;
