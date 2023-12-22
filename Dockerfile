FROM node:20-alpine as build
WORKDIR /app
ADD *.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine

ENV PORT=5001

WORKDIR /app
COPY --from=build /app/dist ./dist
ADD *.json .
RUN npm ci --only=production

EXPOSE 5000
CMD [ "node", "./dist/app.js"]
