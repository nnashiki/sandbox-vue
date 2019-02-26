run:
	docker run --rm --name sample1 -p 8090:80 -v `pwd`/src:/usr/share/nginx/html -d nginx

stop:
	docker stop sample1
