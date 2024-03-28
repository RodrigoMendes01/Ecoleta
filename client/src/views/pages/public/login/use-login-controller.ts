import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodStringParser } from '../../../../app/utils/custom-zod-error';
import { useState } from 'react';

export function useLoginController() {
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    email: z.string(zodStringParser('e-mail')).email('E-mail inválido.').min(1, 'O e-mail é obrigatório.'),
    password: z.string(zodStringParser('senha'))
  });

  type FormData = z.infer<typeof schema>

  const {
    register,
    formState: {errors},
    control,
    handleSubmit: hookFormHandleSubmit
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  return {
    errors,
    register,
    control,
    handleSubmit,
    loading
  };
}
