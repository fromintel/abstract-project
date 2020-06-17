import { Store } from '../models/store';

export class AppStore {
  private static store: Store = {
    groups: [
      {
        id: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        name: 'group1'
      },
      {
        id: '60a82ad3-d1b9-4a49-b6a4-cbce5105280a',
        name: 'group2'
      },
    ],
    organizations: [
      {
        id: '4e5f552a-8f61-4d08-a527-60b52e22474e',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        name: 'organization 1',
        status: 'pending',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: '9cdbb280-88d3-4924-913c-e214cd581765',
        groupId: '60a82ad3-d1b9-4a49-b6a4-cbce5105280a',
        name: 'organization 2',
        status: 'pending',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: '1e55b13b-908b-4fc5-b1a9-28b96adfdd4b',
        groupId: '60a82ad3-d1b9-4a49-b6a4-cbce5105280a',
        name: 'organization 3',
        status: 'pending',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: 'b3dc3fc6-13ec-48cd-b587-4f96cf1a0bca',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        name: 'organization 4',
        status: 'pending',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: '1abf90d8-63cb-476d-a87c-c7ce2f8e4163',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        name: 'organization 5',
        status: 'pending',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      }
    ],
    products: [
      {
        id: 'd7ca3c78-b1d2-4aad-b793-c900a6a3c459',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        orgId: '4e5f552a-8f61-4d08-a527-60b52e22474e',
        name: 'product 1',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: '361f2f37-75de-484e-a0e4-2efe9f7b74fb',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        orgId: 'b3dc3fc6-13ec-48cd-b587-4f96cf1a0bca',
        name: 'product 2',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: 'f0ab7bdd-81d0-4029-bb2e-23fe6c45a802',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        orgId: '4e5f552a-8f61-4d08-a527-60b52e22474e',
        name: 'product 3',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: '03dce804-f931-46ac-bccd-c380a6d2c618',
        groupId: '60a82ad3-d1b9-4a49-b6a4-cbce5105280a',
        orgId: '9cdbb280-88d3-4924-913c-e214cd581765',
        name: 'product 4',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: 'b6d03cca-2774-453d-bd02-704e2ba2fa12',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        orgId: '1abf90d8-63cb-476d-a87c-c7ce2f8e4163',
        name: 'product 5',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: '8b2125c4-f97e-41ac-b0e6-a64498f3b032',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        orgId: '1abf90d8-63cb-476d-a87c-c7ce2f8e4163',
        name: 'product 6',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: 'bf3e092b-b0ea-4f93-96e0-940aa5baa27a',
        groupId: '60a82ad3-d1b9-4a49-b6a4-cbce5105280a',
        orgId: '1e55b13b-908b-4fc5-b1a9-28b96adfdd4b',
        name: 'product 7',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: 'a1eedd11-b0b1-45c5-8570-7fdfa7701993',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        orgId: '1abf90d8-63cb-476d-a87c-c7ce2f8e4163',
        name: 'product 8',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      },
      {
        id: '004506e7-14dd-4786-87e4-36d65c91b92d',
        groupId: 'e97a48eb-3fc3-4826-b638-dfb0b178eaaf',
        orgId: 'b3dc3fc6-13ec-48cd-b587-4f96cf1a0bca',
        name: 'product 9',
        status: 'available',
        dateCreated: '2020-06-01T12:18:29.208+0000',
        dateModified: '2020-06-01T12:18:29.208+0000',
      }
    ]
  };

  public static get storeEntity(): Store {
    return this.store;
  }
}
