var export42 = 'foobar';

var reexported = {
	export42: export42
};

var entrypoint = reexported;

export default entrypoint;
var export42$1 = entrypoint.export42;
export { entrypoint as __moduleExports, export42$1 as export42 };
