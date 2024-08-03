export class ArtifactsError extends Error {
  public readonly code: number;
  public readonly data?: object;

  constructor(code: number, message: string, data?: object) {
    super(message);
    this.code = code;
    this.data = data;
  }

  public static isHttpArtifactsError(obj: unknown): obj is HttpArtifactsError {
    return typeof obj === 'object' && obj !== null && 'error' in obj;
  }
}

export type HttpArtifactsError = {
  error: {
    code: number;
    message: string;
    data: object;
  };
};
