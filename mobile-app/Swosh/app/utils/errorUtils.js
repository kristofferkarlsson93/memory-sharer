import knownErrors from '../constants/knownResponseErrors';

export const isKnownError = (error)  => {
  return !!knownErrors[error];
}