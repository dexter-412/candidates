import * as Yup from "yup";
import maxFileSizeValidator from "~/plugins/yup/maxFileSizeValidator";
import allowedFileExtension from "~/plugins/yup/allowedFileExtension";
import {FileType} from "~/application/types/app/enums";

declare module "Yup" {
    interface MixedSchema {
        maxFileSizeValidation(size: number): MixedSchema<File>;
        allowedFileExtension(type: FileType): MixedSchema<File>;
    }
}

Yup.addMethod(Yup.MixedSchema<File>, 'maxFileSizeValidation', maxFileSizeValidator)
Yup.addMethod(Yup.MixedSchema<File>, 'allowedFileExtension', allowedFileExtension)

export default Yup