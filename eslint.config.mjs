import nx from "@nx/eslint-plugin";

export default [
	...nx.configs["flat/base"],
	...nx.configs["flat/typescript"],
	...nx.configs["flat/javascript"],
	{
		ignores: ["**/dist", "**/eslint.config.mjs", "**/jest.config.ts"],
	},
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
		rules: {
			"@nx/enforce-module-boundaries": [
				"error",
				{
					enforceBuildableLibDependency: true,
					allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
					depConstraints: [
						{
							sourceTag: "*",
							onlyDependOnLibsWithTags: ["*"],
						},
					],
				},
			],
		},
	},
	{
		files: [
			"**/*.ts",
			"**/*.tsx",
			"**/*.cts",
			"**/*.mts",
			"**/*.js",
			"**/*.jsx",
			"**/*.cjs",
			"**/*.mjs",
		],
		// Override or add rules here
		rules: {
			quotes: ["error", "double"],
			"jsx-quotes": ["error", "prefer-double"],
			"sort-imports": [
				"error",
				{
					ignoreCase: false,
					ignoreDeclarationSort: false,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: [
						"none",
						"all",
						"multiple",
						"single",
					],
					allowSeparatedGroups: true,
				},
			],
			"sort-vars": "error",
		},
	},
];
