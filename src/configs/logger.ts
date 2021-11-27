import winston from 'winston';
import WinstonDaily from 'winston-daily-rotate-file';

const logDir = 'logs';
const { combine, timestamp, printf } = winston.format;

// Define log format
const logFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${JSON.stringify(info.message)}`;
});

const debugFormat = printf((info) => {
  if (info.level.includes('http')) return `${info.level}: ${info.message}`;
  if (info.level.includes('info')) return `${info.level}: ${info.message}`;
  return `${info.level}: ${JSON.stringify(info.message, null, 4)}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    // info 레벨 로그를 저장할 파일 설정
    new WinstonDaily({
      level: 'http',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: '%DATE%.log',
      maxFiles: 30, // 30일치 로그 파일 저장
      zippedArchive: true,
    }),
    // error 레벨 로그를 저장할 파일 설정
    new WinstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error', // error.log 파일은 /logs/error 하위에 저장
      filename: '%DATE%.error.log',
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

// Production 환경이 아닌 경우(dev 등)
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(), // 색깔 넣어서 출력
        debugFormat,
      ),
    }),
  );
}

export default logger;
