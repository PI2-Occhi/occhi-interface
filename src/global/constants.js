export const CONTROL_SERVICE = {
  SERVICE_UUID: '36752d4f-07d2-4b8c-b533-6dbc8f5cae92',
  CHARACTERISTICS: [
    { UUID: 'ef00490b-5c12-44be-bc6b-546850faaa0a', NAME: 'COMMAND' },
  ],
};

export const SENSORS_SERVICE = {
  SERVICE_UUID: '4079e396-1c21-46fc-bd36-dc1886766b29',
  CHARACTERISTICS: [
    { UUID: 'ac9c9ebf-3b91-4b4b-8c91-355d4d712eab', NAME: 'POWER' },
    { UUID: '7d9c1b66-5e0c-4470-98fe-e9b4e4cdace5', NAME: 'COLISION' },
    { UUID: '7d9c1b66-5e0c-4470-98fe-e9b4e4cdace5', NAME: 'OVERTURN' },
    { UUID: '2c5e098a-d69b-44e2-b721-af9a405d9063', NAME: 'CHAIR' },
  ],
};
