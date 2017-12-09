export interface S3Options {
    key: string;
    secret: string;
    bucket: string;
}

export interface GunAngularOptions {
    peers?: string[];
    s3?: S3Options;
    file?: string;
    uuid?: () => string;
}
