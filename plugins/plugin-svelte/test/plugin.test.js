const mockCompiler = jest.fn().mockImplementation(() => ({js: ''}));
const mockPreprocessor = jest.fn();

const path = require('path');

const mockConfig = {buildOptions: {sourceMaps: false}, installOptions: {rollup: {plugins: []}}};
const mockComponent = path.join(__dirname, 'Button.svelte');

describe('@snowpack/plugin-svelte', () => {
  describe('mocked ', () => {
    let plugin;

    beforeAll(() => {
      jest.mock('svelte/compiler', () => ({compile: mockCompiler, preprocess: mockPreprocessor})); // important: mock before import
      plugin = require('../plugin');
    });

    afterAll(() => {
      jest.unmock('svelte/compiler');
    });

    afterEach(() => {
      mockCompiler.mockClear();
      mockPreprocessor.mockClear();
    });

    it('passes options to compiler', () => {
      const options = {
        generate: 'ssr',
        isDev: false,
      };
      const sveltePlugin = plugin(mockConfig, options);
      sveltePlugin.load({filePath: mockComponent});
      const passedOptions = mockCompiler.mock.calls[0][1];

      // this tests that all options passed above made it to the compiler
      // objectContaining() allows additional options to be passed, but we only care that our options have been preserved
      expect(passedOptions).toEqual(expect.objectContaining(options));
    });

    it('handles preprocessing', () => {
      // test-only config option
      const options = {__config: path.join(__dirname, 'svelte.config.js')};

      const sveltePlugin = plugin(mockConfig, options);

      sveltePlugin.load({filePath: mockComponent});
      jest.mock('svelte/compiler', () => ({compile: jest.fn(), preprocess: mockPreprocessor}));

      // as long as this function has been called, we can assume success
      expect(mockPreprocessor).toHaveBeenCalled();
    });
  });

  describe('unmocked', () => {
    let plugin;

    beforeAll(() => {
      plugin = require('../plugin');
    });

    it('generates code', () => {
      const options = {};
      const sveltePlugin = plugin(mockConfig, options);
      const result = sveltePlugin.load({filePath: mockComponent});
      expect(result).toMatchSnapshot();
    });
  });
});
