# Use an official Nginx image to serve static files
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static site files to nginx public directory
COPY index.html ./
COPY packages/css ./packages/css
COPY packages/js ./packages/js
COPY packages/images ./packages/images

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
