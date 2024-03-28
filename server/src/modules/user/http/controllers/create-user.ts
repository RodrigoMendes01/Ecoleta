import { Request, Response } from 'express';
import { z } from 'zod';
import { zodStringParser } from '../../../../core/utils/custom-zod-error';

const bodySchema = z.object({
	name: z.string(zodStringParser('nome')),
	email: z.string(zodStringParser('e-mail')).email(),
	document: z.string(zodStringParser('cpf')),
	phone: z.string(zodStringParser('telefone'))
		.min(13, 'O telefone deve ter 13 caracteres')
		.max(14, 'O telefone deve ter 14 caracteres'),
	password: z.string().min(8, 'A senha deve conter no mínimo 8 caracteres')
});

export async function createUser(request: Request, response: Response) {
	const {
		name,
		email,
		document,
		phone,
		password
	} = bodySchema.parse(request.body);

  
}