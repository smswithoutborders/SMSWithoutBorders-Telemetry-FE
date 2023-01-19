FROM httpd:2.4 as apache
WORKDIR /usr/local/apache2

# production build with ssl
FROM apache as production
# copy custom apache config with ssl enabled
COPY configs/httpd.ssl.conf ./conf/httpd.conf
COPY configs/httpd-ssl.conf ./conf/extra/httpd-ssl.conf
COPY . ./htdocs

EXPOSE 443

# dev build without ssl
FROM apache as development
# copy custom apache config
COPY configs/httpd.conf ./conf/httpd.conf
COPY . ./htdocs

EXPOSE 80