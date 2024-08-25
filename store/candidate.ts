import {defineStore} from "pinia";
import {StoreKey} from "~/application/types/app/store";
import type {Candidate} from "~/application/types/api/candidate";
import type {CandidatesTableInfo} from "~/application/componentResources/candidatesTable";
import type {CandidateForm} from "~/composables/useCandidateValidation";

const useCandidateStore = defineStore(StoreKey.Candidate, () => {
    const candidates = ref<Candidate[]>([
        {
            id: 1,
            first_name: 'Kyryl',
            last_name: 'Shevchenko',
            email: 'email@email',
            bio: 'Some bio',
            skills:  ['react', 'angular'],
            resume_file: '',
            github_url: ''
        },
        {
            id: 2,
            first_name: 'Taras',
            last_name: 'Shevchenko',
            email: 'email@email',
            bio: 'Some bio',
            skills: ['react', 'angular'],
            resume_file: '',
            github_url: ''
        },
    ])

    const candidatesTableView = computed<CandidatesTableInfo[]>(() => {
        return candidates.value.map((candidate) => {
            return {
                id: candidate.id,
                fullName: `${candidate.first_name} ${candidate.last_name}`,
                email: candidate.email,
                skills: candidate.skills,
            }
        })
    })

    function getCandidateById(id: number) {
        return candidates.value.find((candidate) => candidate.id === id)
    }

    function addCandidate(data: CandidateForm) {
        candidates.value.unshift({
            first_name: data.firstName,
            last_name: data.lastName,
            skills: data.skills,
            bio: data.bio,
            email: data.email,
            resume_file: data.resume,
            github_url: data.link,
            id: candidates.value.length + 1
        })
    }

    function editCandidate(data: CandidateForm, id: number) {
        for (let i = 0; i < candidates.value.length; i++) {
            if (candidates.value[i].id === id) {
                candidates.value[i].first_name = data.firstName
                candidates.value[i].last_name = data.lastName
                candidates.value[i].skills = data.skills
                candidates.value[i].bio = data.bio
                candidates.value[i].email = data.email
                candidates.value[i].resume_file = data.resume
                candidates.value[i].github_url = data.link

                break
            }
        }
    }

    return {
        candidates,
        candidatesTableView,
        getCandidateById,
        addCandidate,
        editCandidate,
    }
})

export default useCandidateStore