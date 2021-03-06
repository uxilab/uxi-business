

export const selectErrorMessage = (userMessageForContext = {}) => {
  const {
    accessDenied,
    notFoundError,
    networkError,
    success,
    error,
    warning,
    unknownError,
    info,
    queued,
    conflictedError,
  } = userMessageForContext;

  const errorMessages = [
    ...(networkError || []).map(m => ({
      ...m,
      type: 'network',
    })),
    ...(error || []).map(m => ({
      ...m,
    })),
    ...(accessDenied || []).map(m => ({
      ...m,
      type: 'accessDenied',
    })),
    ...(unknownError || []).map(m => ({
      ...m,
      type: 'unknown',
    })),
    ...(notFoundError || []).map(m => ({
      ...m,
      type: 'noFound',
    })),
    ...(conflictedError || []).map(m => ({
      ...m,
      type: 'conflicted',
    })),
  ];

  const warningMessages = [
    ...(warning || []),
    ...(queued || []).map(m => ({
      ...m,
      type: 'queue',
    })),
  ];

  return {
    errorMessages,
    successMessages: success || [],
    globalInfoMessages: info || [],
    warningMessages,
  };
};


export default {
  selectErrorMessage,
};
