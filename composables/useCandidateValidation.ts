import type {ObjectSchema} from 'yup'
import Yup from "~/utils/yupExtensions";
import {object} from "yup";
import {FileType} from "~/application/types/app/enums";

export interface CandidateForm {
    firstName: string,
    lastName: string,
    email: string,
    bio?: string,
    skills: string[],
    resume: File | string | null,
    link?: string,
}

export default function () {
    const validationSchema: ObjectSchema<CandidateForm> = object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email().required('Email is required'),
        bio: Yup.string().optional(),
        skills: Yup.array().of(Yup.string().required()).min(1, '1 skill required').required('1 skill required'),
        resume: Yup.mixed<File>()
            .required('Resume is required').maxFileSizeValidation(2).allowedFileExtension(FileType.PDF),
        link: Yup.string().url().optional(),
    })

    const initialValues: CandidateForm = {
        firstName: '',
        lastName: '',
        email: '',
        bio: '',
        resume: null,
        link: '',
        skills: [],
    }

    return useForm({
        validationSchema,
        initialValues,
    })
}