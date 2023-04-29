import NextAuth from 'next-auth';

import { authOptions } from '@repo/auth';

export default NextAuth(authOptions);
