import { UsersRepository } from "@/repositories/users-repository";

interface AuthenticateUseCaseRequest {

}

interface AuthenticateUseCaseResponse {

}

export class AuthenticateUseCase {
    constructor(
        private usersRepository: UsersRepository,
    ) { }

    async execute() {
        // auth
    }
}