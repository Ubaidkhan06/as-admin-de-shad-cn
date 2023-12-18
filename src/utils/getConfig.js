export const getConfigSwr = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
