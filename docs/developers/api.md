---
id: api
title: API
sidebar_label: API
---

Charter has a number of APIs and integrations that you can integrate with if you operate your own system.

## Authentication

You can get a day-long JWT token for accessing the Charter APIs from the login endpoint using your email and password (this example uses [jq](https://stedolan.github.io/jq/)).

```sh
curl https://charter.firstperson.travel/auth/login \
  -s -H 'Content-Type: application/json' -X POST \
  --data '{"email": "EMAIL", "password": "PASSWORD"}' | jq -r .data.jwt
```

Use your token by passing it as a Bearer token using the authorization header in your requests; i.e. `Authorization: Bearer <token>`.

The login endpoint will also return the list of workspaces (or `orgs` in the API) that your user has access to. You'll need to use the numeric ID of your desired workspace as the `orgId` parameter in API calls.

```json
{
  "data": {
    "orgs": [{
      "id": 0,
      "name": "your-workspace",
      "title": "Your Workspace"
    }]
  }
}
```

## Rest API

Use the REST API for retrieving and making updates to Charter objects.

### General Usage

All endpoints accept query parameters in the URL for filters. Updates should be JSON-encoded in the body of your `PATCH` or `POST` request.

All endpoints require an `orgId` query parameter matching the numeric ID of your workspace. Many endpoints also require an `experienceId` parameter matching the ID of your project.

#### List

Use the list endpoint to query for a set of resources matching desired parameters.

* `count`: Number of records to return. Defaults to 250.
* `offset`: Offset used for pagination. Defaults to 0.
* `sort`: Sort by a specific field. Preface with `-` to sort descending.

You may pass in a field name to filter by values of that field. You can filter by numeric, string, date, or boolean values. You can search by multiple values by separating by commas.

* `GET /api/trips?orgId=1` will return all trips belonging to workspace `1`.
* `GET /api/participants?isArchived=false` will return all unarchived participants.
* `GET /api/participants?name=Alice,Bob,Charles` will return all participants with one of the three specified names.
* `GET /api/groups?date=2020-03-03` will return all run groups matching the specified date.

You may include range searches with operation suffixes: `eq`, `gt`, `gte`, `lt`, and `lte`. `GET /api/groups?date__gte=2020-03-03` will return all run groups equal to or after the 3rd of March.

#### Create

Calls to the create endpoint should include all fields JSON encoded in the POST body.

#### Retrieve

#### Update

Updates may be partial. Fields not included in the PATCH body will remain unchanged.

### Projects

Run groups use the resource name `experience` in the API due to legacy naming. Project endpoints require the `orgId` query parameter.

| Field | Type | Description |
| - | - | - |
| **orgId** | number | The ID of the workspace this project belongs to. |
| **createdAt** | ISO-8601 timestamp | When this project was created. |
| **name** | string | A URL-compatible (lowercase-dashed) version of the title. |
| **title** | string | The project title for display. |
| **timezone** | string | The default project timezone. |
| domain | string | Custom URL domain for this project. |
| isArchived | boolean | Has this project been archived. |

#### List projects `GET /api/experiences`

#### Create project `POST /api/experiences`

#### Retrieve project `GET /api/experiences/:id`

#### Update project `PATCH /api/experiences/:id`

### Scripts

Script endpoints require the `orgId` and `experienceId` query parameters. Each script is a revision of a particular project.

| Field | Type | Description |
| - | - | - |
| **orgId** | number | The ID of the workspace this project belongs to. |
| **experienceId** | number | The ID of the project this script belongs to. |
| **createdAt** | ISO-8601 timestamp | When this project was created. |
| **updatedAt** | ISO-8601 timestamp | When this project was last updated. |
| **revision** | number | The revision number |
| **content** | object | The contents of the script |
| isActive | boolean | Is this script currently live. |
| isLocked | boolean | Is this script locked from editing. |
| isArchived | boolean | Is this script archived. |

#### List scripts `GET /api/scripts`

#### Create script `POST /api/scripts`

#### Retrieve script `GET /api/script/:id`

#### Update script `PATCH /api/script/:id`

### Run groups

Run groups use the resource name `group` in the API due to legacy naming. Run group endpoints require the `orgId` and `experienceId` query parameters.

| Field | Type | Description |
| - | - | - |
| **orgId** | number | The ID of the workspace this project belongs to. |
| **experienceId** | number | The ID of the project this script belongs to. |
| **scriptId** | number | The ID of the script this run group is based on. |
| **date** | date | The date of this run group. |
| isArchived | boolean | Is this run group archived. |

#### List run groups `GET /api/groups`

#### Create run group `POST /api/groups`

#### Retrieve run group `GET /api/groups/:id`

#### Update run group `PATCH /api/groups/:id`

### Runs

Runs use the resource name `trip` in the API due to legacy naming. Run endpoints require the `orgId` and `experienceId` query parameters.

| Field | Type | Description |
| - | - | - |
| **orgId** | number | The ID of the workspace this project belongs to. |
| **experienceId** | number | The ID of the project this script belongs to. |
| **scriptId** | number | The ID of the script this run group is based on. |
| **groupId** | number | The ID of the run group this run belongs to. |
| **createdAt** | ISO-8601 timestamp | When this project was created. |
| **updatedAt** | ISO-8601 timestamp | When this project was last updated. |
| **title** | string | The display title of this run. |
| **date** | date | The date of this run. |
| variantNames | string | A comma-separated list of active variants. |
| tripState | object | Key run state like the current scene and active pages for each role. |
| customizations | object | Run customizations set by defaults or staff. |
| values | object | Run values as updated by defaults or in-run actions. |
| waypointOptions | object | The active location for each place. |
| schedule | object | Clock times corresponding to each moment in the run. |
| history | object | A history of each behavior in the run and when it was last triggered.|
| isArchived | boolean | Is this run archived. |

#### List runs `GET /api/trips`

#### Create run `POST /api/trips`

#### Retrieve run `GET /api/trip/:id`

#### Update run `PATCH /api/trip/:id`

### Participants

Participant endpoints require the `orgId` and `experienceId` query parameters.

| Field | Type | Description |
| - | - | - |
| **orgId** | number | The ID of the workspace this project belongs to. |
| **experienceId** | number | The ID of the project this script belongs to. |
| **createdAt** | ISO-8601 timestamp | When this project was created. |
| name | string | Full name. |
| email | string | Email. |
| phoneNumber | string | Phone number. |
| isActive | boolean | Can this participant be added to new runs. |
| isArchived | boolean | Is this script archived. |

#### List participants `GET /api/participants`

#### Create participant `POST /api/participants`

#### Retrieve participant `GET /api/participant/:id`

#### Update participant `PATCH /api/participant/:id`

### Profiles

Profile endpoints require the `orgId` and `experienceId` query parameters. Profiles allow the attachment of metadata to each participant's involvement with a certain role.

| Field | Type | Description |
| - | - | - |
| **orgId** | number | The ID of the workspace this project belongs to. |
| **experienceId** | number | The ID of the project this script belongs to. |
| **participantId** | number | The ID of the participant this profile belongs to. |
| **roleName** | string | The name of a role in the script content. |
| values | object | Values to be added to the run state if this profile is used. |
| isActive | boolean | Can this participant be added to new runs. |
| isArchived | boolean | Is this script archived. |

#### List profiles `GET /api/profiles`

#### Create profile `POST /api/profiles`

#### Retrieve profile `GET /api/profile/:id`

#### Update profile `PATCH /api/profile/:id`

## RPC API

Use the RPC API for triggering actions or events on your runs.

### Apply action

Use the apply action endpoint to trigger a particular action in your run: `POST /api/trips/:id/actions`.

| Field | Type | Description |
| - | - | - |
| **player_id** | number | The ID of the player making the action |
| **name** | string | The name of the action being applied. |
| **params** | object | Parameters to the action. |

### Apply event

Use the apply event endpoint to trigger a particular event in your run: `POST /api/trips/:id/events`.

| Field | Type | Description |
| - | - | - |
| **player_id** | number | The ID of the player making the action |
| **type** | string | The type of event being applied. |
| ***** | string | Include all other fields of the event as named parameters. |