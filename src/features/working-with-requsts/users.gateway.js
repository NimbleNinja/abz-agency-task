const url = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const fetchPositions = () => {
  return fetch(`${url}/positions`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => data.positions);
};

export const fetchUsers = page => {
  return fetch(`${url}/users?page=${page}&count=6`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      return {
        users: data.users,
        totalPages: data.total_pages,
      };
    });
};
