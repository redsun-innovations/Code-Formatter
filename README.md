VS_Code ||
Vs code supports code formatting for multiple languages like java, c++, c, javascript etc... so for that we need to install extensions for the specific languages
  1) c++/c - c/c++ Extension
  2) java - Extension pack for java
  3) xml - XML Tools
  4) javascript - prettier

After installing the extensions we need to create a EditorConfig (Rightclick -> Generate.editorconfig) 
For checking just Right click inside your specific files we'll see Reformat Document click on that to verify the indention.
For Enabling Auto save press Ctrl + , and look up for the Editor: Format on save and Notebool>Format on save: Enabled check the dialog box to enable

----------------------------------------------------------------------------------------------------------------------------------------------------------------

Intellij ||
Intellij doesn't support C++/C languages code formatting. For languages like java, javascript etc .. we can use code formatting by 
 1) Install a 'EditorConfig' plugin from a plugin marketplace
 2) right click your parent folder search for EditorConfig under New, check the First 2 dialog boxes and choose the specific language you want for code formatting
 3) Once the Editorconfig file is created we can check by right clicking the specific file and click Reformat code
 4) Make sure the EditorConfig support is enabled (File->Settings->Editor->Code Styles)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

CLion ||
CLion supports code formatting for multiple languages like java, c++, c, javascript etc... For that we need to use same steps in Intellij
1) Install a 'EditorConfig' plugin from a plugin marketplace
2) right click your parent folder search for EditorConfig under New, check the First 2 dialog boxes and choose the specific language you want for code formatting
3) Once the Editorconfig file is created we can check by right clicking the specific file and click Reformat code
4) Make sure the EditorConfig support is enabled (File->Settings->Editor->Code Styles)
