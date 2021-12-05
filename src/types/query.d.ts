declare type MutationHookParameters = {
  onSuccess?: () => unknown;
  onError?: (error: Error) => unknown;
};
