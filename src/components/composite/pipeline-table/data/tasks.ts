import { IPipeline } from './schema';

export const PipelineData: IPipeline[] = [
  {
    "id": "pipe_001",
    "status": "completed",
    "source": "github",
    "webUrl": "https://example.com/pipelines/001",
    "createdAt": "2025-03-01T10:00:00Z",
    "duration": "15m 30s",
    "stages": [
      {
        "id": "stage1",
        "status": "success",
        "name": "test"
      },
      {
        "id": "stage2",
        "status": "success",
        "name": "build"
      },
      {
        "id": "stage3",
        "status": "success",
        "name": "deploy"
      }
    ]
  },
  {
    "id": "pipe_002",
    "status": "failed",
    "source": "gitlab",
    "webUrl": "https://example.com/pipelines/002",
    "createdAt": "2025-03-02T14:30:00Z",
    "duration": "8m 45s",
    "stages": [
      {
        "id": "stage1",
        "status": "success",
        "name": "test"
      },
      {
        "id": "stage2",
        "status": "failed",
        "name": "build"
      },
      {
        "id": "stage3",
        "status": "pending",
        "name": "deploy"
      }
    ]
  },
  {
    "id": "pipe_003",
    "status": "running",
    "source": "bitbucket",
    "webUrl": "https://example.com/pipelines/003",
    "createdAt": "2025-03-03T09:15:00Z",
    "duration": "5m 12s",
    "stages": [
      {
        "id": "stage1",
        "status": "success",
        "name": "test"
      },
      {
        "id": "stage2",
        "status": "running",
        "name": "build"
      },
      {
        "id": "stage3",
        "status": "pending",
        "name": "deploy"
      }
    ]
  },
    {
      "id": "pipe_004",
      "status": "pending",
      "source": "github",
      "webUrl": "https://example.com/pipelines/004",
      "createdAt": "2025-03-04T16:20:00Z",
      "duration": "0m 0s"
    },
    {
      "id": "pipe_005",
      "status": "success",
      "source": "gitlab",
      "webUrl": "https://example.com/pipelines/005",
      "createdAt": "2025-03-05T11:45:00Z",
      "duration": "22m 18s"
    },
    {
      "id": "pipe_006",
      "status": "running",
      "source": "bitbucket",
      "webUrl": "https://example.com/pipelines/006",
      "createdAt": "2025-03-06T13:10:00Z",
      "duration": "3m 25s"
    },
    {
      "id": "pipe_007",
      "status": "canceled",
      "source": "github",
      "webUrl": "https://example.com/pipelines/007",
      "createdAt": "2025-03-07T08:55:00Z",
      "duration": "12m 40s"
    },
    {
      "id": "pipe_001",
      "status": "success",
      "source": "github",
      "webUrl": "https://example.com/pipelines/001",
      "createdAt": "2025-03-01T10:00:00Z",
      "duration": "15m 30s"
    },
    {
      "id": "pipe_002",
      "status": "running",
      "source": "gitlab",
      "webUrl": "https://example.com/pipelines/002",
      "createdAt": "2025-03-02T14:30:00Z",
      "duration": "8m 45s"
    },
    {
      "id": "pipe_003",
      "status": "canceled",
      "source": "bitbucket",
      "webUrl": "https://example.com/pipelines/003",
      "createdAt": "2025-03-03T09:15:00Z",
      "duration": "5m 12s"
    },
    {
      "id": "pipe_004",
      "status": "pending",
      "source": "github",
      "webUrl": "https://example.com/pipelines/004",
      "createdAt": "2025-03-04T16:20:00Z",
      "duration": "0m 0s"
    },
    {
      "id": "pipe_005",
      "status": "success",
      "source": "gitlab",
      "webUrl": "https://example.com/pipelines/005",
      "createdAt": "2025-03-05T11:45:00Z",
      "duration": "22m 18s"
    },
    {
      "id": "pipe_006",
      "status": "running",
      "source": "bitbucket",
      "webUrl": "https://example.com/pipelines/006",
      "createdAt": "2025-03-06T13:10:00Z",
      "duration": "3m 25s"
    },
    {
      "id": "pipe_007",
      "status": "canceled",
      "source": "github",
      "webUrl": "https://example.com/pipelines/007",
      "createdAt": "2025-03-07T08:55:00Z",
      "duration": "12m 40s"
    }
];
