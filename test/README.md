Potential issue in Swagger Editor 3.6.24 (was working fine in previous versions).

To reproduce:
* Load the "test.yaml" file in Swagger Editor by following the "Test" link below
* In the right panel, expand the POST method
* You get an error from the resolver: "Could not resolve pointer: /components/schemas/B2 does not exist in document"
* If, instead of expanding the POST method, you first expand the schemas A and B1, then when you expand POST, there is no error

[Test](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/master/test/test.yaml)
