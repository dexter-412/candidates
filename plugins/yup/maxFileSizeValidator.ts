import {magaBytesToBytes} from "~/application/helpers/magaBytesToBytes";
import {MixedSchema} from "yup";

export default function(this:  MixedSchema<File>,size: number) {
    const message = `Max file size ${size}MB`

    return this.test('test-max-file-size', message, function(file: File) {
        if (file === undefined) {
            return false
        }

        const { path, createError } = this

        return (file && file.size < magaBytesToBytes(size)) ||
            createError({ path, message: message } || false)
    })
}