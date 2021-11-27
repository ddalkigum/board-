type ErrorStatusCode = 400 | 401 | 403 | 404 | 500 | 503;

export class ErrorCode extends Error {
  public name: string;
  public message: string;
  public statusCode: ErrorStatusCode;
  public location: string;

  constructor(name: string, message?: string) {
    super(name);
    this.name = name;
    this.statusCode = errorCodes[name] ? errorCodes[name].statusCode : 500;
    this.message = message || (errorCodes[name] ? errorCodes[name].message : 'Server Error');
  }
}

const errorCodes = {
  NotFound: { message: 'Not found', statusCode: 404 },
};

export class BadRequest extends Error {
  readonly statusCode: number;
  constructor(message: string) {
    super();
    this.name = 'BadRequest';
    this.message = message;
    this.statusCode = 400;
  }
}
export class Unauthorized extends Error {
  readonly statusCode: number;
  constructor(message: string) {
    super();
    this.name = 'Unauthorized';
    this.message = message;
    this.statusCode - 401;
  }
}
export class Forbidden extends Error {
  readonly statusCode: number;
  constructor(message: string) {
    super();
    this.name = 'Forbidden';
    this.message = message;
    this.statusCode = 403;
  }
}
export class NotFound extends Error {
  readonly statusCode: number;
  constructor() {
    super();
    this.name = 'NotFound';
    this.message = 'NotFound';
    this.statusCode = 404;
  }
}

export class InternalServerError extends Error {
  readonly statusCode: number;
  constructor(message: string) {
    super();
    this.name = 'InternalServerError';
    this.message = message ?? 'InternalServerError';
    this.statusCode = 500;
  }
}

export class BadGateWay extends Error {
  readonly statusCode: number;
  constructor(message: string) {
    super();
    this.name = 'BadGateWay';
    this.message = message;
    this.statusCode = 503;
  }
}

export class GateWayTimeout extends Error {
  readonly statusCode: number;
  constructor(message: string) {
    super();
    this.name = 'GateWayTimeout';
    this.message = message;
    this.statusCode = 504;
  }
}
