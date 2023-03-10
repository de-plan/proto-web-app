export type Work = {
  version: '0.1.0';
  name: 'proto';
  instructions: [
    {
      name: 'saveGeoJson';
      accounts: [
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'geoJson';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'geodata';
          type: {
            defined: 'GeoData';
          };
        }
      ];
    },
    {
      name: 'checkIn';
      accounts: [
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'checkIn';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'hindex';
          type: 'string';
        },
        {
          name: 'mongoId';
          type: 'string';
        },
        {
          name: 'message';
          type: 'string';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'GeoJsonData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'geojson';
            type: 'string';
          },
          {
            name: 'mongoId';
            type: 'string';
          }
        ];
      };
    },
    {
      name: 'CheckInData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'hindex';
            type: 'string';
          },
          {
            name: 'message';
            type: 'string';
          },
          {
            name: 'mongoId';
            type: 'string';
          }
        ];
      };
    },
    {
      name: 'GeoJsonData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'geojson';
            type: 'string';
          },
          {
            name: 'mongoId';
            type: 'string';
          }
        ];
      };
    },
    {
      name: 'CheckInData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'hindex';
            type: 'string';
          },
          {
            name: 'message';
            type: 'string';
          },
          {
            name: 'mongoId';
            type: 'string';
          }
        ];
      };
    }
  ];
  types: [
    {
      name: 'GeoData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'geojson';
            type: 'string';
          },
          {
            name: 'mongoId';
            type: 'string';
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'InvalidGeoJson';
      msg: 'Invalid GeoJson';
    }
  ];
};

export const idl: Work = {
  version: '0.1.0',
  name: 'proto',
  instructions: [
    {
      name: 'saveGeoJson',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'geoJson',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'geodata',
          type: {
            defined: 'GeoData',
          },
        },
      ],
    },
    {
      name: 'checkIn',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'checkIn',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'hindex',
          type: 'string',
        },
        {
          name: 'mongoId',
          type: 'string',
        },
        {
          name: 'message',
          type: 'string',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'GeoJsonData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'geojson',
            type: 'string',
          },
          {
            name: 'mongoId',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'CheckInData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'hindex',
            type: 'string',
          },
          {
            name: 'message',
            type: 'string',
          },
          {
            name: 'mongoId',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'GeoJsonData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'geojson',
            type: 'string',
          },
          {
            name: 'mongoId',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'CheckInData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'hindex',
            type: 'string',
          },
          {
            name: 'message',
            type: 'string',
          },
          {
            name: 'mongoId',
            type: 'string',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'GeoData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'geojson',
            type: 'string',
          },
          {
            name: 'mongoId',
            type: 'string',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidGeoJson',
      msg: 'Invalid GeoJson',
    },
  ],
};
