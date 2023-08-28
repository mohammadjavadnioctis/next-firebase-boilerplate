import { ApplicationFormInfoType, PolicyStatusType } from ".";

interface FetchedPolicyType extends ApplicationFormInfoType {
    timestamp: Date,
    status: PolicyStatusType,
    id: string
}

export default FetchedPolicyType