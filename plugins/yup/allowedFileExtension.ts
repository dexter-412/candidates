import {MixedSchema} from "yup";
import {FileType} from "~/application/types/app/enums";

export default function(this:  MixedSchema<File>, type: FileType) {
    const message = `Allowed only ${type} type`

    return this.test('test-allowed-file-type', message, function(file: File) {
        if (file === undefined) {
            return false
        }

        const { path, createError } = this

        return (file && file.type === type) ||
            createError({ path, message: message } || false)
    })
}