// Purpose: Compile-time public API exercise.
import{parseMarkdown,splitArtifact,retrieve}from'../src/index.mjs';const c=parseMarkdown('# 1 A');retrieve(c[0],splitArtifact('x.js','function x(){}'));
